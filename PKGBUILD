# Maintainer: Rose Spangler <132@ikl.sh>
_pkgname="minirss"
pkgname="${_pkgname}-git"
pkgver=v1.2.0.r1.gdb1c789
pkgrel=1
pkgdesc="A minuscule RSS notifier"
arch=("any")
url=https://git.ikl.sh/132ikl/minirss
license=("GPL3")
depends=("python>=3.7" "python-appdirs" "python-requests" "python-feedparser" "notification-daemon" "xdg-utils")
makedepends=("git")
optdepends=("dunst: enable middle click open link functionality")
provides=("minirss")
conflicts=("minirss")
source=("git+${url}.git")
md5sums=("SKIP")

pkgver()  {
    cd "$_pkgname"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
    mkdir -p "${pkgdir}/usr/bin/" "${pkgdir}/usr/lib/systemd/user/"
    install -m755 "${_pkgname}/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
    install -m644 "${_pkgname}/${_pkgname}.service" "${pkgdir}/usr/lib/systemd/user/${_pkgname}.service"
}
