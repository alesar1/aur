# Maintainer: Manuel Wiesinger <m@mmap.at>

pkgname=i3-gnome-pomodoro-git
_srcname=i3-gnome-pomodoro

pkgver=r42.e9525cb
pkgrel=1
pkgdesc="Integrate gnome-pomodoro into i3"
arch=('any')
url="https://github.com/kantord/i3-gnome-pomodoro"
license=('unknown')

depends=('python' 'gnome-shell-pomodoro ' 'python-click>=6.7' 'python-pydbus>=0.6.0' 'i3ipc-python-git')
makedepends=('git')
provides=("$_srcname")

source=("git+${url}.git")
sha512sums=('SKIP')

pkgver() {
	 cd "$srcdir/${_srcname}"
	 printf "r%s.%s\n" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "${srcdir}/${_srcname}"
	install -D -m755 pomodoro-client.py "$pkgdir/usr/bin/i3-gnome-pomodoro"
}
