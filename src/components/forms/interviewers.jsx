"use client"
import {
    useState
} from "react"
import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import {
    z
} from "zod"
import {
    cn
} from "@/lib/utils"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    PhoneInput
} from "@/components/ui/phone-input";
import {
    CloudUpload,
    Paperclip
} from "lucide-react"
import {
    FileInput,
    FileUploader,
    FileUploaderContent,
    FileUploaderItem
} from "@/components/ui/file-upload"

const formSchema = z.object({
    name_2705843881: z.string().min(1),
    name_4171122155: z.string(),
    name_1948825487: z.string(),
    name_5600234727: z.string().min(1),
    name_5497433427: z.string().min(1),
    name_3493987943: z.string().min(1),
    name_7873301505: z.string().min(1),
    name_5246895039: z.string(),
    name_8890746896: z.number().min(0)
});

export default function MyForm() {

    const [files, setFiles] = useState < File[] | null > (null);

    const dropZoneConfig = {
        maxFiles: 5,
        maxSize: 1024 * 1024 * 4,
        multiple: true,
    };
    const form = useForm < z.infer < typeof formSchema >> ({
        resolver: zodResolver(formSchema),

    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

                <FormField
                    control={form.control}
                    name="name_2705843881"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type="text"
                                    {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_4171122155"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Institution email ID</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type="email"
                                    {...field} />
                            </FormControl>
                            <FormDescription>Only students of Ashoka University are eligible to apply.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_1948825487"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel>Phone number</FormLabel>
                            <FormControl className="w-full">
                                <PhoneInput
                                    placeholder="Placeholder"
                                    {...field}
                                    defaultCountry="TR"
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="name_5600234727"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Batch</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>Enter both starting year and ending year, e.g. UG 2024-2028.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_5497433427"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Major / Minor</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type="text"
                                    {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_3493987943"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>One of the people we plan to interview is Miles Brundage. Acquaint yourself with his work and tell us 2-3 nontrivial questions you would ask him and why.</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type="text"
                                    {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_7873301505"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What is one thing that stands out to you in the current AI Safety industry? </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This could be a research paper that caught your eye, a software-tool, a video you liked - anything!</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_5246895039"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Writing sample</FormLabel>
                            <FormControl>
                                <FileUploader
                                    value={files}
                                    onValueChange={setFiles}
                                    dropzoneOptions={dropZoneConfig}
                                    className="relative bg-background rounded-lg p-2"
                                >
                                    <FileInput
                                        id="fileInput"
                                        className="outline-dashed outline-1 outline-slate-500"
                                    >
                                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                                            <CloudUpload className='text-gray-500 w-10 h-10' />
                                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span>
                                                &nbsp; or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF
                                            </p>
                                        </div>
                                    </FileInput>
                                    <FileUploaderContent>
                                        {files &&
                                            files.length > 0 &&
                                            files.map((file, i) => (
                                                <FileUploaderItem key={i} index={i}>
                                                    <Paperclip className="h-4 w-4 stroke-current" />
                                                    <span>{file.name}</span>
                                                </FileUploaderItem>
                                            ))}
                                    </FileUploaderContent>
                                </FileUploader>
                            </FormControl>
                            <FormDescription>Please upload a sample that helps us understand your skills in the kind of writing that is required in this role.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name_8890746896"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>How many hours per week will you commit to this role?</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder=""

                                    type="number"
                                    {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}