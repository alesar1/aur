# Maintainer: Sanpi <sanpi+aur@homecomputing.fr>
pkgname=xargo
pkgver=0.2.2
pkgrel=1
pkgdesc='Effortless cross compilation of Rust programs to custom bare-metal targets like ARM Cortex-M'
url="https://github.com/japaric/$pkgname"
arch=('x86_64')
license=('Apache' 'MIT')
depends=('rustup' 'gcc-libs-multilib')
makedepends=('cargo')
source=("$url/archive/v$pkgver.zip")
sha256sums=('5bff9a383fdcd452fa66ef8d579c3b2be0f3dc355d0a49d9f5856ca91b9194c7')

build()
{
    cd "$pkgname-$pkgver"

    cargo build --release
}

package()
{
    cd "$pkgname-$pkgver"

    install --mode 755 --directory "$pkgdir/usr/bin"
    install --mode 755 target/release/xargo "$pkgdir/usr/bin"
}
