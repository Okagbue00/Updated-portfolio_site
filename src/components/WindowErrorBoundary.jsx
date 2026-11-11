import React from 'react'
import WindowControls from '#components/WindowControls.jsx'

// If something inside one window crashes (e.g. the PDF viewer on an old browser),
// show a message inside that window instead of letting React blank the whole site.
class WindowErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error) {
        console.error(`Window "${this.props.windowKey}" crashed:`, error);
    }

    render() {
        if (!this.state.hasError) return this.props.children;

        return (
            <>
                <div id="window-header">
                    <WindowControls target={this.props.windowKey} />
                </div>
                <div className="p-6 text-sm text-gray-600 space-y-3 bg-white">
                    <p>Sorry, this window couldn't be displayed on this device.</p>
                    {this.props.windowKey === 'resume' && (
                        <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                            Open the resume PDF directly
                        </a>
                    )}
                </div>
            </>
        );
    }
}

export default WindowErrorBoundary;
