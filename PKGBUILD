# Maintainer: Arne Beer <privat@arne.beer>

pkgname=pueue
pkgver='0.6.2'
pkgrel=1
arch=('any')
pkgdesc='A command scheduler for shells'
license=('MIT')
makedepends=('cargo')
url='https://github.com/nukesor/pueue'
source=(
    "https://github.com/Nukesor/pueue/archive/v${pkgver}.tar.gz"
)
md5sums=('3f1ae101ec42b403f6f3b63e2546a45a')

build() {
    tar xf "v${pkgver}.tar.gz"
    cd "pueue-${pkgver}"

    # Build the daemon and client
    cargo build --release --locked

    ./build_completions.sh
}


package() {
    cd "pueue-${pkgver}"

    # Install binaries
    install -Dm755 "target/release/pueue" "${pkgdir}/usr/bin/pueue"
    install -Dm755 "target/release/pueued" "${pkgdir}/usr/bin/pueued"

    # Place systemd user service
    install -Dm644 "utils/pueued.service" "${pkgdir}/usr/lib/systemd/user/pueued.service"

    # Install zsh completions file
    # Zsh is broken for now
#    install -Dm644 "utils/completions/_pueue" "${pkgdir}/usr/share/zsh/site-functions/_pueue"
    install -Dm644 "utils/completions/pueue.bash" "${pkgdir}/usr/share/bash-completion/completions/pueue.bash"
    install -Dm644 "utils/completions/pueue.fish" "${pkgdir}/usr/share/fish/completions/pueue.fish"

    # Install License
    install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/pueue/LICENSE"
}
