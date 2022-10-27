import BuggyButton from '@/ui/BuggyButton';

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between space-x-3">
        <div className="text-xl font-medium text-zinc-800">
          <div className="text-xl font-medium text-zinc-800">
            Error Handling
          </div>
        </div>

        <BuggyButton />
      </div>

      <ul className="list-disc space-y-2 pl-4 text-sm text-zinc-700">
        <li>
          <strong>`error.js`</strong> defines the error boundary for a route
          segment and the children below it. It can be used to show specific
          error information, and functionality to attempt to recover from the
          error.
        </li>
        <li>
          Trying navigation pages and triggering an error in nested layouts.
        </li>
        <li>Note: Error boundaries don't yet work in development.</li>
      </ul>

      <div>
        <a
          className="font-medium text-zinc-700 hover:text-black"
          href="https://beta.nextjs.org/docs/routing/loading-ui"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
