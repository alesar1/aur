# Maintainer: Stanisław Jasiewicz <stjasiewicz@gmail.com>
pkgname=mango
pkgver=1.1.0
pkgrel=1
pkgdesc="A tool for making backups of Arch packages and its dependencies"
arch=('any')
url="https://gitlab.com/Taro94/mango"
license=('GPL')
makedepends=('dotnet-sdk>=3.1.0')
source=("https://gitlab.com/Taro94/$pkgname/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
md5sums=('4ade066edc6e7fd4365e18156e7044a0')
options=(!strip)

package() {
	cd "$pkgname-$pkgver"
    dotnet publish -c Release -r linux-x64 --self-contained true -p:PublishSingleFile=true -p:PublishTrimmed=true -o published
    install -Dm 755 "published/${pkgname}" -t "$pkgdir/usr/bin"
    install -Dm 755 "mango/fakepkg.sh" -t "$pkgdir/usr/share/mango"
}
