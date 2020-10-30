# Maintainer: Ilya Zlobintsev <ilya.zl@protonmail.com>
pkgname=lact-git
pkgver=r17.5eac31b
pkgrel=1
license=("MIT")
pkgdesc="AMDGPU Controller application"
url="https://github.com/ilyazzz/LACT"
makedepends=("rust" "git")
depends=("gtk3" "hwids")
arch=("any")
source=("git+https://github.com/ilyazzz/LACT.git" "lactd.service" "lact.desktop")
sha512sums=("SKIP"
    "d84665b73a6daf79122196b8fc4899aac8576eb3040bc180f2d597a2763cdbd1dea873d16cb21666bcb0c6360fd700f3e640b5eb946c821403baa8ae5156591a"
    "dbd7b6fd2041da1f7272503d99d598d061a7f56e8aed74d92d013b01d9d7282f4ff66b3d180779ec16f9293d789c5082472633cfb1e0705a699895d12fa713b9")

pkgver() {
  cd LACT
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd LACT
    cargo build --release 
}

package() {
    install -Dm644 lactd.service "${pkgdir}"/usr/lib/systemd/system/lactd.service
    install -Dm644 lact.desktop "${pkgdir}"/usr/share/applications/lact.desktop
    cd LACT
    install -Dm755 target/release/daemon "${pkgdir}"/usr/bin/lact-daemon
    install -Dm755 target/release/gui "${pkgdir}"/usr/bin/lact-gui
}
