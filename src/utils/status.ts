const SHOW_STATUS_PATH = {
    information: ['/register/info'],
    package: ['/register/distance', '/register/review'],
    payment: ['/register/summary', '/register/payment'],
};

export function determineStatus(pathname: string) {
    for (const status in SHOW_STATUS_PATH) {
        if (
            SHOW_STATUS_PATH[status as keyof typeof SHOW_STATUS_PATH].includes(
                pathname
            )
        ) {
            return status;
        }
    }
    return null;
}
