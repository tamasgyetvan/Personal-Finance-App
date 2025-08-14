import { createFileRoute } from '@tanstack/react-router';
import { AuthContainer } from '../components/index/AuthContainer';

export const Route = createFileRoute('/')({
    component: RouteComponent,
});

function RouteComponent() {
    return <AuthContainer />;
}
