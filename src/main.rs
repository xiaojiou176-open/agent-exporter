use beamme::cli;

fn main() {
    if let Err(error) = cli::run() {
        eprintln!("BeamMe failed: {error:#}");
        std::process::exit(1);
    }
}
