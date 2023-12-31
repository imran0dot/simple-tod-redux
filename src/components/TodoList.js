import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((state) => state?.todos);
    const filters = useSelector((state) => state?.filters);
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(todo => {
                    const { status } = filters;
                    switch (status) {
                        case 'complete':
                            return todo.completed;

                        case 'incomplete':
                            return !todo.completed;

                        default: return true
                    }
                })
                .filter(todo => {
                    const { colors } = filters;
                    if (colors.length > 0) {
                        return colors.includes(todo?.color);
                    } return true
                })
                .map(todo => <Todo todo={todo} key={todo?.id} />)}
        </div>
    );
}
