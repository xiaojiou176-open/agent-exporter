use agent-export::cli;

fn main() {
    if let Err(error) = cli::run() {
        eprintln!("AgentExport failed: {error:#}");
        std::process::exit(1);
    }
}
