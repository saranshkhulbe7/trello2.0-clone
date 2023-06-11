type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
    id: TypedColumn;
    todos: Todo[];
}

interface Image {
    bucketId: string;
    fileId: string
}

interface Todo{
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColumn;
    image?: Image;
}

interface Board {
    columns: Map<TypedColumn, Column>;
}