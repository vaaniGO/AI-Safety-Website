import { useState, useMemo } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GoogleCalendarDayEmbed() {
    // Get next Tuesday from current date
    const getNextTuesday = (fromDate = new Date()) => {
        const date = new Date(fromDate);
        const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const daysUntilTuesday = (2 - dayOfWeek + 7) % 7; // 2 = Tuesday

        // If today is Tuesday, get next Tuesday (7 days from now)
        if (daysUntilTuesday === 0) {
            date.setDate(date.getDate() + 7);
        } else {
            date.setDate(date.getDate() + daysUntilTuesday);
        }

        return date;
    };

    const [selectedDate, setSelectedDate] = useState(() => getNextTuesday());

    // Format date for Google Calendar embed (YYYYMMDD)
    const formatDateForCalendar = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    };

    // Format date for display
    const formatDateForDisplay = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Navigate to previous/next Tuesday
    const navigateTuesday = (direction) => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + (direction * 7));
        setSelectedDate(newDate);
    };

    // Google Calendar embed URL
    const calendarUrl = useMemo(() => {
        const formattedDate = formatDateForCalendar(selectedDate);
        const baseUrl = 'https://calendar.google.com/calendar/embed?src=c_cc2a19d4c35bda6dbaad33e35989838c3a06abdad484cf62c5b96f6adeee6020%40group.calendar.google.com&ctz=Asia%2FKolkata&bgcolor=%23000000&color=%23ffffff&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0;dates=20210601/20211231';
        const params = new URLSearchParams({
            mode: 'Schedule',
            dates: `${formattedDate}/${formattedDate}`,
            height: '600',
            wkst: '1',
            bgcolor: '%23ffffff', // You can change this to your timezone
            showTitle: '0',
            showNav: '0',
            showDate: '0',
            showPrint: '0',
            showTabs: '0',
            showCalendars: '0'
        });

        return `${baseUrl}?${params.toString()}`;
    }, [selectedDate]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Tuesday Calendar View
                    </h1>
                </div>

                {/* Date Navigation */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigateTuesday(-1)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                        title="Previous Tuesday"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="text-lg font-semibold text-gray-700 min-w-64 text-center">
                        {formatDateForDisplay(selectedDate)}
                    </div>

                    <button
                        onClick={() => navigateTuesday(1)}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                        title="Next Tuesday"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setSelectedDate(getNextTuesday())}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Next Tuesday
                </button>
                <button
                    onClick={() => setSelectedDate(getNextTuesday(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)))}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                    Tuesday After Next
                </button>
            </div>

            {/* Calendar Embed */}
            <div className="border rounded-lg overflow-hidden shadow-inner">
                <iframe
                    src={calendarUrl}
                    style={{ border: 0 }}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title={`Google Calendar - ${formatDateForDisplay(selectedDate)}`}
                    className="w-full"
                />
            </div>
        </div>
    );
}