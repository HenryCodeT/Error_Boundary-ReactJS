# ErrorBoundary en React

El código proporcionado es una implementación de un componente llamado `ErrorBoundary` en React. Este componente se utiliza para capturar y gestionar errores que pueden ocurrir dentro de los componentes hijos y renderizar un componente de respaldo en caso de que se produzca un error.

## Interfaz Props

El componente `ErrorBoundary` acepta las siguientes propiedades:

- `children` (React.ReactNode): Representa los componentes hijos que se deben renderizar dentro de `ErrorBoundary`.
- `fallBackComponent` (React.ReactNode): Es el componente de respaldo que se renderiza en caso de que se produzca un error.
- `resetCondition` (unknown, opcional): Un valor opcional que, si cambia, restablece el estado de `ErrorBoundary` y evita que se muestre el componente de respaldo.
- `error` (boolean): Un valor booleano que indica si se ha producido un error en el componente.

## Estado del Componente

El componente `ErrorBoundary` tiene el siguiente estado:

- `hasError` (boolean): Un valor que indica si se ha producido un error.
- `resetCondition` (unknown): Almacena el valor de `resetCondition` de las props.

## Constructor

En el constructor del componente, se inicializa el estado `hasError` en `false` y se asigna el valor de `resetCondition` desde las props.

## Métodos Estáticos

- `getDerivedStateFromError(error: Error)`: Este método estático se llama cuando se produce un error en uno de los componentes hijos. Registra el error en la consola y establece `hasError` en `true`.

- `getDerivedStateFromProps(props: Props, state: State)`: Este método estático se llama cada vez que las props cambian. Compara el valor de `resetCondition` actual con el valor anterior en el estado. Si son diferentes, restablece `hasError` a `false`.

## Renderización

El método `render()` decide qué componente renderizar en función del estado `hasError` y la prop `error`. Si `hasError` es `true` o `error` es `true`, se renderiza el componente de respaldo (`fallBackComponent`). De lo contrario, se renderizan los componentes hijos (`children`).

Este componente es útil para encapsular partes críticas de la aplicación y mostrar un mensaje de error personalizado en lugar de una experiencia rota en caso de que se produzca un error.
