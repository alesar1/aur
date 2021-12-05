_pkgbase=xmm7360-pci
pkgbase=xmm7360-pci-git
pkgname=(xmm7360-pci-dkms-git xmm7360-pci-utils-git)
pkgver=r219.b28714b
pkgrel=1
pkgdesc='Driver for the Fibocom L850-GL / Intel XMM7360 LTE modem'
arch=('x86_64')
url="https://github.com/xmm7360/xmm7360-pci"
license=(BSD GPL)
makedepends=(python)
source=("git+$url"
        "dkms.conf"
        "xmm7360.service"
        "kernel-5.15-compat.patch"
        "nodbus-exit-code.patch")
sha256sums=('SKIP'
            '2400211ef89ab0003db5ad2ffaf2bc9306c33d0d259f57f1457a4bc688a4c41f'
            '1c541d039c4ee26502b6efa5aea4c788359036f34299db1dc808cbfb803bfe8e'
            '2347cbf69ad32c33eae11546865355a2fc3b0a2ae747c70057e1ca142957edf3'
            'b5e98c712fff07040426f632e45c594c288e6adb2ecda06b31e2387d6284fa82')

pkgver() {
  cd ${_pkgbase}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd ${_pkgbase}
  patch -p1 -i'' "${srcdir}"/kernel-5.15-compat.patch
  patch -p1 -i'' "${srcdir}"/nodbus-exit-code.patch
}

build() {
  cd ${_pkgbase}
  python -m compileall -o1 rpc
}

package_xmm7360-pci-dkms-git() {
  pkgdesc+=" – module sources"
  depends=(dkms)
  provides=(XMM7360-PCI-MODULE)
  cd ${_pkgbase}
  install -Dm644 "${srcdir}"/dkms.conf xmm7360.c Makefile -t "${pkgdir}"/usr/src/${pkgbase}-${pkgver}/
}

package_xmm7360-pci-utils-git() {
  pkgdesc+=" – utilities only"
  depends=(XMM7360-PCI-MODULE dbus-python python-pyroute2 python-configargparse)
  backup=(etc/xmm7360)
  cd ${_pkgbase}
  install -d "${pkgdir}"/usr/lib/${pkgbase}
  cp --preserve=mode -R rpc "${pkgdir}"/usr/lib/${pkgbase}
  install -Dm644 "$srcdir"/xmm7360.service -t "${pkgdir}"/usr/lib/systemd/system
  install -Dm644 xmm7360.ini.sample "${pkgdir}"/etc/xmm7360
}
