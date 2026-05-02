const PROJECT_LIST = [
    {
        title: "Master Thesis",
        language: "Haskell",
        link: "https://loafey.se/resources/Thesis.pdf",
        content: `A typed system-level functional programming language based on continuations and linear types. 
        Written Sebastian Selander and myself. I primarily spent time working on the
        code generation to x86-64, and got to focus on designing the ABI and memory layout among other things.`
    },
    {
        title: "Bachelor Thesis",
        language: "Haskell",
        link: "https://github.com/loafey/churf",
        content: `A typed functional programming language based on System-F. Created by a
        team of six people, 
        and I personally spent time working on the
        code generation to LLVM IR.`
    },
    {
        title: "Blastcap",
        language: "Rust & C#",
        link: "https://github.com/loafey/blastcap",
        content: `
        A multiplayer turn-based strategy game.
        Backend and game logic are written in Rust, with a frontend made with Godot and C#.
        The backend and frontend communicate through FFI, with binding code automatically generated using 
        Rust's macro system.
        `
    },
    {
        title: "WASP",
        language: "Rust",
        link: "https://github.com/loafey/wasp",
        content: `An experimental (mostly and soon) spec-compliant WASM runtime written in Rust.`
    },
    {
        title: "Ondth",
        language: "Rust",
        link: "https://github.com/loafey/ondth",
        content: `Multiplayer shooter that allows for level scripting 
            using arbitrary languages compiled to WebAssembly.`
    },
    {
        title: "Advent of Code", language: "Rust",
        link: "https://github.com/loafey/advent_of_code",
        content: `My solutions of Advent of Code in Rust.`
    },
    {
        title: "rusty_procedure_call", language: "Rust",
        link: "https://github.com/loafey/rusty_procedure_call",
        content: `A proof of concept RPC macro for Rust.
        Automatically generates the RPC network code
        for sharing a struct accross network boundaries, allowing for easy prototyping for
        network interfaces.`
    },
    {
        title: "logiko", language: "Rust",
        link: "https://github.com/loafey/logiko",
        content: `A puzzle game made where you solve Fitch style natural deduction proofs.
            Can be found over at <a href="https://loafey.se/logiko/">loafey.se/logiko/<a>
        `
    },
    {
        title: "Interior Mutability Pointer", language: "Rust",
        link: "https://github.com/loafey/interior_mutability_pointer",
        content: `A highly experimental library for Rust adding a smart pointer which gives you a
        similar pointer
        experience to Java/C#, letting you avoid the cumbersome syntax of
        <code>Rc&lt;RefCell&lt;T&gt;&gt;</code>.
        
        Actually pretty <a
            href="https://github.com/loafey/interior_mutability_pointer/issues/2">unsafe</a>
        but a pretty neat concept.`
    },
    {
        title: "dvet.se", language: "JavaScript",
        link: "https://github.com/Datavetenskapsdivisionen/dvet.se",
        content: `The site for our student organization. 
        The site can be found here at <a href="https://dvet.se">dvet.se</a>.`
    },
    {
        title: "NixOS config", language: "Nix",
        link: "https://github.com/loafey/niiix",
        content: `My NixOS config for the nerds.`
    },
    {
        title: "The rest", language: "", link: null,
        content: `The rest of my projects can be found on my <a href="https://github.com/loafey">GitHub
        page</a>.`
    },
];