# Maintainer: willemw <willemw12@gmail.com>

# NOTE This PIP package behaves like a VCS package: to update, reinstall the package.
#      That is the only reason why this package ends on -git.

pkgname=sickchill-git
pkgver=0.0.55.r0
pkgrel=1
pkgdesc="Automatic video library manager for TV shows"
arch=('any')
url="https://sickchill.github.io"
license=('GPL3')
depends=('nodejs' 'python-pip' 'python-pyopenssl' 'python-virtualenv')
makedepends=('python-virtualenv')
#            'deluge: supported torrent client'
#            'qbittorrent: supported torrent client'
#            'rtorrent: supported torrent client'
#            'sabnzbd: supported NZB downloader'
#            'transmission-cli: supported torrent client'
#mediainfo
optdepends=('unrar: for RAR archives')
provides=(${pkgname%-git})
conflicts=(${pkgname%-git})
options=('!strip')
install=$pkgname.install
source=('sickchill.service'
        'sickchill.sysusers'
        'sickchill.tmpfile')
md5sums=('309b8555af7b355f16a3ec784771f426'
         '97fb191af2e326d5aba2cf58270b4feb'
         '515f13e391105a716ef6763ba8533fc7')

pkgver() {
  pip search "${pkgname%-git}" | awk '$1 == "'${pkgname%-git}'" { gsub("[()]", ""); print $2 ".r0" }'
}

prepare() {
  rm -rf build
}

build() {
  mkdir -p build
  cd build

  virtualenv .
  ./bin/pip install --isolated --no-warn-script-location --root=. --prefix=. sickchill

  sed -i '1s|.*|#!/opt/sickchill/app/bin/python|' bin/SickChill.py
}

package() {
  install -Dm644 sickchill.service "$pkgdir/usr/lib/systemd/system/sickchill.service"
  install -Dm644 sickchill.sysusers "$pkgdir/usr/lib/sysusers.d/sickchill.conf"
  install -Dm644 sickchill.tmpfile "$pkgdir/usr/lib/tmpfiles.d/sickchill.conf"

  install -dm755 "$pkgdir"/opt/sickchill/data
  cp -a build "$pkgdir/opt/sickchill/app"

  warning "If the upgrade fails with \"error: failed to commit transaction (conflicting files)\", then uninstall first"
}

