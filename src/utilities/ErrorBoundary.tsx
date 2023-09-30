import React from 'react';

interface Props {
  children: React.ReactNode;
  fallBackComponent: React.ReactNode;
  resetCondition?: unknown;
  error: boolean;
}

interface State {
  hasError: boolean;
  resetCondition: unknown;
}

export class ErrorBoundary extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, resetCondition: props.resetCondition, };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }
  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.resetCondition !== state.resetCondition) {
      return { hasError: false, resetCondition: props.resetCondition };
    }
    return null;
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return this.props.fallBackComponent;
    }
    return this.props.children;
  }
}