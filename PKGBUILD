# Maintainer: Arne Beer <arne@twobeer.de>

pkgname=pueue-git
pkgver=v1.0.6.r223.g815dacb
pkgrel=1
arch=('any')
pkgdesc='A task manager and scheduler for shell commands'
license=('MIT')
makedepends=('git' 'cargo')
conflicts=('pueue')
provides=('pueue')
url='https://github.com/nukesor/pueue'
source=("$pkgname"::"git://github.com/nukesor/pueue.git#branch=development")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

build() {
    cd $pkgname

    # Build the daemon and client
    cargo build --release --locked

    mkdir -p ./utils/completions
    ./target/release/pueue completions bash ./utils/completions
    ./target/release/pueue completions fish ./utils/completions
    ./target/release/pueue completions zsh ./utils/completions
}

package() {
    cd $pkgname

    # Install binaries
    install -Dm755 "target/release/pueue" "${pkgdir}/usr/bin/pueue"
    install -Dm755 "target/release/pueued" "${pkgdir}/usr/bin/pueued"

    # Place systemd user service
    install -Dm644 "utils/pueued.service" "${pkgdir}/usr/lib/systemd/user/pueued.service"

    # Install zsh completions file
    install -Dm644 "utils/completions/_pueue" "${pkgdir}/usr/share/zsh/site-functions/_pueue"
    install -Dm644 "utils/completions/pueue.bash" "${pkgdir}/usr/share/bash-completion/completions/pueue.bash"
    install -Dm644 "utils/completions/pueue.fish" "${pkgdir}/usr/share/fish/completions/pueue.fish"

    # Install License
    install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/pueue/LICENSE"
}
