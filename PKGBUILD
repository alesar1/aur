# Maintainer: Wilhelm Schuster <wilhelm [aT] wilhelm [.] re>
pkgname=kcgi
pkgver=0.9.0
pkgrel=1
pkgdesc="Minimal CGI and FastCGI library"
arch=('i686' 'x86_64')
url="http://kristaps.bsd.lv/kcgi/"
license=('custom')
depends=('glibc')
source=("https://kristaps.bsd.lv/kcgi/snapshots/$pkgname-$pkgver.tgz"
        "LICENSE")
sha512sums=('b8e0c2acda0afa872a765c0477a30ee7f9ba365bf6b11de4a11da8d6542ffed4f138212ea365acab9b243701e53f826d9652cbbd1acd12b174997ea97b3009e5'
            'b040c157fe8b95a41a0375d2cd3cc4e6406a988ed5f337b0c6dd15f1ea08344196018a5c2353c2acfbde7858ca5e0f2bf00d1cc4890661effadf39e239a95520')

build() {
  cd $pkgname-$pkgver

  ./configure
  make
}

check() {
  cd $pkgname-$pkgver

  make regress
}

package() {
  cd $pkgname-$pkgver

  make PREFIX="$pkgdir/usr" SBINDIR="$pkgdir/usr/bin" install

  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

