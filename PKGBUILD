# Maintainer: XiaYeSuiFeng <xiayesuifeng@firerain.me>
pkgname=gopanel
pkgver=0.0.1
pkgrel=2
pkgdesc='A control panel that is written in Golang and is able to manage Caddy 2'
arch=('x86_64')
license=('GPLv3')
url='https://gitlab.com/xiayesuifeng/gopanel'
backup=('etc/gopanel/config.json')
depends=('caddy')
makedepends=('go' 'npm')
source=("https://gitlab.com/xiayesuifeng/${pkgname}/-/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz"
        "gopanel-web.tar.gz::https://gitlab.com/xiayesuifeng/${pkgname}-web/-/archive/master/gopanel-web-master.tar.gz")
sha256sums=('728621f83072b6fde3f57fe6e99f7aabda7d22ba040f15348730ad01fd851411'
            'SKIP')

build() {
  cd ${srcdir}/gopanel-web-master
  npm install
  npm run build
  cd ${srcdir}/${pkgname}-${pkgver}
  go build -v
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}

  mkdir -p "$pkgdir/etc/gopanel/app.conf.d"
  mkdir -p "$pkgdir/usr/share/gopanel/web"
  install -D -m 0755 gopanel "$pkgdir/usr/bin/gopanel"
  install -D -m 0644 systemd/gopanel.service "$pkgdir/usr/lib/systemd/system/gopanel.service"
  install -D -m 0644 config.default.json "$pkgdir/etc/gopanel/config.json"
  cp -rf ${srcdir}/gopanel-web-master/build "${pkgdir}/usr/share/gopanel/web"
  chmod -R 0644 "${pkgdir}/usr/share/gopanel/web"
}
