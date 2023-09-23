import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                
            </header>
            <main className="content">
            
                {children}
            </main>
            <footer className="footer">
                Made with ❤️ by ChatGPT
            </footer>

            <style jsx>{`
                .layout {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    font-family: Arial, sans-serif;
                }

                .header, .footer {
                    background: linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%);
                    color: white;
                    padding: 1rem 0;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .content {
                    flex: 1;
                    padding: 1rem;
                }
            `}</style>
        </div>
    );
}
export default Layout;
