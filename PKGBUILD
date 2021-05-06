pkgname=mt
pkgver=0.1.0+alpha2021.05.05
pkgrel=1
pkgdesc="A terminal written in GTK+ and Rust"
provides=("com.gitlab.miridyan.Mt")
makedepends=('cargo')
depends=('gtk3' 'vte3' 'libhandy')
arch=('x86_64')
url="https://gitlab.com/Miridyan/mt"
source=("$pkgname-v$pkgver-$pkgrel.tar.gz::https://gitlab.com/Miridyan/$pkgname/-/archive/v$pkgver-$pkgrel/$pkgname-v$pkgver-$pkgrel.tar.gz")
license=('GPL2')
sha512sums=('88c96e51c275ef09e2111e1eaa4c29d123898b3382b1c52bdb05fd2660a4568088b14336494eafafc57621c475ea544736a0dd92fd1a6a26cf59dc888e602a4b')

build() {
    cd $srcdir/$pkgname-v$pkgver-$pkgrel
    cargo build --release
}

package() {
    cd $srcdir/$pkgname-v$pkgver-$pkgrel

    install -Dm 755 "target/release/mt" "$pkgdir/usr/bin/Mt"
    install -Dm 644 "data/com.gitlab.miridyan.Mt.desktop" "$pkgdir/usr/share/applications/com.gitlab.miridyan.Mt.desktop"
    install -Dm 644 "data/icons/16x16/apps/com.gitlab.miridyan.Mt.svg" "$pkgdir/usr/share/icons/hicolor/16x16/apps/com.gitlab.miridyan.Mt.svg"
    install -Dm 644 "data/icons/22x22/apps/com.gitlab.miridyan.Mt.svg" "$pkgdir/usr/share/icons/hicolor/22x22/apps/com.gitlab.miridyan.Mt.svg"
    install -Dm 644 "data/icons/24x24/apps/com.gitlab.miridyan.Mt.svg" "$pkgdir/usr/share/icons/hicolor/24x24/apps/com.gitlab.miridyan.Mt.svg"
    install -Dm 644 "data/icons/32x32/apps/com.gitlab.miridyan.Mt.svg" "$pkgdir/usr/share/icons/hicolor/32x32/apps/com.gitlab.miridyan.Mt.svg"
    install -Dm 644 "data/icons/48x48/apps/com.gitlab.miridyan.Mt.svg" "$pkgdir/usr/share/icons/hicolor/48x48/apps/com.gitlab.miridyan.Mt.svg"
    install -Dm 644 "data/icons/64x64/apps/com.gitlab.miridyan.Mt.svg" "$pkgdir/usr/share/icons/hicolor/64x64/apps/com.gitlab.miridyan.Mt.svg"
    install -Dm 644 "data/icons/scalable/apps/com.gitlab.miridyan.Mt.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/com.gitlab.miridyan.Mt.svg"
    install -Dm 644 "data/icons/symbolic/apps/com.gitlab.miridyan.Mt-symbolic.svg" "$pkgdir/usr/share/icons/hicolor/symbolic/apps/com.gitlab.miridyan.Mt-symbolic.svg"
}
