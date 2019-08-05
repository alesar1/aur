# Maintainer: David Birks <david@tellus.space>

pkgname=kube-forwarder
pkgver=1.4.1
pkgrel=1
pkgdesc='Easy to use Kubernetes port forwarding manager'
arch=('x86_64')
depends=('electron')
makedepends=('npm')
url='https://github.com/pixel-point/kube-forwarder'
license=('MIT')
source=("$pkgname-$pkgver.tar.gz::https://github.com/pixel-point/kube-forwarder/archive/v${pkgver}.tar.gz"
        'kube-forwarder.desktop'
        'kube-forwarder.sh')
sha512sums=('bccacb02495e376bc759299e670d68b8138486be3283b4a8b6024e129e2b5e29e4fab2ea10c812ed67eb8f7b19a278b022ce94080dd6abcbcb7fc92ae716eab5'
            '7e05c6d152488a9aa56e9c4aa01797f263ba09de1f6b91af487619ad424a833be6b2af722719aebd1906a74430b7ef8c93c5c4e7aef80c4a04776d8cce93ffd6'
            '808d36263a068ab068b7ee52a578cc194c4e37193009e3cc2393ef5dc03d2b4b11c9ab11da4d399c5a05e1dbeaa3916fe06886e61cd4f1226b488e135aa2d94d')

prepare() {
  cd "$srcdir/$pkgname-$pkgver"
  npm install --cache "${srcdir}/npm-cache"

  cp .env.example .env.production
}

build() {
  cd "$srcdir/$pkgname-$pkgver"
  npm run build --linux --cache "${srcdir}/npm-cache"
}

package() {
  # Install app.asar and launcher script
  install -D "$srcdir/$pkgname-$pkgver/build/linux-unpacked/resources/app.asar" "$pkgdir/usr/share/kube-forwarder/app.asar"
  install -D "$srcdir/kube-forwarder.sh" "$pkgdir/usr/bin/$pkgname"

  # Install desktop file and icon
  install -D "$srcdir/kube-forwarder.desktop" "$pkgdir/usr/share/applications/kube-forwarder.desktop"
  install -D "$srcdir/$pkgname-$pkgver/build/icons/1024x1024.png" "$pkgdir/usr/share/pixmaps/kube-forwarder.png"
}
