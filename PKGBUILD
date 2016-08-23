# Maintainer: Maikel Wever <maikelwever@gmail.com>

pkgname=lxd-lts
_gitpkgname=lxd
pkgver=2.0.4
pkgrel=1
pkgdesc="REST API, command line tool and OpenStack integration plugin for LXC. (LTS version)"
arch=('x86_64')
url="https://github.com/lxc/lxd"
license=('APACHE')
conflicts=('lxd')
provides=('lxd')
depends=('lxc')
makedepends=('go' 'git')
options=('!strip' '!emptydirs')
optdepends=(
    'lvm2: for lvm2 support'
    'thin-provisioning-tools: for thin provisioning support'
    'btrfs-progs: for btrfs support'
    'linux-userns: kernel with CONFIG_USER_NS enabled'
    'linux-lts-userns: LTS kernel with CONFIG_USER_NS enabled'
)
source=(
    "https://github.com/lxc/$_gitpkgname/archive/$_gitpkgname-$pkgver.tar.gz"
    "lxd.service"

    "dnsmasq-lxd.conf"
    "dnsmasq@lxd.service"
    "lxd.netctl"
    "dbus-dnsmasq-lxd.conf"
    "networkmanager-dnsmasq-lxd.conf"
)

md5sums=('9e63bcd0ce9248eadf5c1a8e789af9ce'
         'b1780c0e01e404895e35ac277aa597c4'
         'b1fd16933c1b24aaa9ccc8f5a0e6478c'
         'f2bc527eabb1fdba810b0393ee41edd4'
         '52c641ea0ba5477f5c1a1b857c03dda9'
         'c9b5c98497e4ddc47d0c078b5b500f93'
         '427926fddb1537f7a65d0a7274106df5')

_gourl=github.com/lxc/lxd


build() {
  mkdir -p $srcdir/src/${_gourl}
  cp -r --preserve=timestamps $srcdir/$_gitpkgname-$_gitpkgname-$pkgver/* $srcdir/src/${_gourl}/
  cd $srcdir/src/${_gourl}
  GOPATH="$srcdir" go get
  GOPATH="$srcdir" go build
  GOPATH="$srcdir" make
}

package() {
  install=lxd.install

  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/usr/lib/lxd/"

  install -p -m755 "$srcdir/bin/"* "$pkgdir/usr/bin"
  mv "$pkgdir/usr/bin/lxd-bridge-proxy" "$pkgdir/usr/lib/lxd/"

  install -p -m755 "$srcdir/src/$_gourl/lxd-bridge/lxd-bridge" "$pkgdir/usr/lib/lxd/"

  # Package license (if available)
  for f in LICENSE COPYING LICENSE.* COPYING.*; do
    if [ -e "$srcdir/src/$_gourl/$f" ]; then
      install -Dm644 "$srcdir/src/$_gourl/$f" \
        "$pkgdir/usr/share/licenses/$pkgname/$f"
    fi
  done

  install -D -m644 "${srcdir}/lxd.service" \
      "${pkgdir}/usr/lib/systemd/system/lxd.service"


  # Example configuration files.
  mkdir -p "$pkgdir/usr/share/lxd/"
  mkdir -p "$pkgdir/usr/share/lxd/systemd/system/"
  mkdir -p "$pkgdir/usr/share/lxd/netctl/"
  mkdir -p "$pkgdir/usr/share/lxd/dbus-1/system.d/"
  mkdir -p "$pkgdir/usr/share/lxd/NetworkManager/dnsmasq.d/"

  install -Dm644 "${srcdir}/dnsmasq-lxd.conf" "${pkgdir}/usr/share/lxd/dnsmasq-lxd.conf"
  install -Dm644 "${srcdir}/dnsmasq@lxd.service" "${pkgdir}/usr/share/lxd/systemd/system/dnsmasq@lxd.service"
  install -Dm644 "${srcdir}/lxd.netctl" "${pkgdir}/usr/share/lxd/netctl/lxd"
  install -Dm644 "${srcdir}/dbus-dnsmasq-lxd.conf" "${pkgdir}/usr/share/lxd/dbus-1/system.d/dnsmasq-lxd.conf"
  install -Dm644 "${srcdir}/networkmanager-dnsmasq-lxd.conf" "${pkgdir}/usr/share/lxd/NetworkManager/dnsmasq.d/lxd.conf"

}

# vim:set ts=2 sw=2 et:
