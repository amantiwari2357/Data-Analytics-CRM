
import Layout from "@/components/layout/Layout";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-3xl font-bold mb-4 gradient-text">{title} Page</h1>
        <p className="text-muted-foreground text-center max-w-md">
          This page would contain the {title.toLowerCase()} functionality in a complete implementation.
          Currently, only the Dashboard Overview is fully implemented.
        </p>
      </div>
    </Layout>
  );
}
