export function AuthContainer() {
    return (
        <section className="grid grid-cols-[4fr_6fr] max-w-[1440px] min-h-[960px] bg-beige-100 rounded-3xl">
            <div className=" flex flex-col justify-between bg-[url(/assets/illustration-authentication.svg)] bg-no-repeat bg-cover p-[4rem] rounded-3xl overflow-hidden">
                <img src="/assets/logo-large.svg" className="max-w-[120px]" alt="Finance" />
                <div>
                    <h1 className="text-preset-1 text-white mb-[4rem]">
                        Keep track of your money and save for your future
                    </h1>
                    <p className="text-preset-4 text-white">
                        Personal finance app puts you in control of your spending. Track
                        transactions, set budgets and add to saving pots easily.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center">Form Placeholder</div>
        </section>
    );
}
