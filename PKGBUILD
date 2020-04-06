# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Nikolay Rysev <mad.f3ka@gmail.com>
# Modified for vfs_proprietary by Daniel Kamil Kozar <dkk089@gmail.com>
# Modified for libfprint2 by Stephen Bird <sebirdman@gmail.com>
# Contributor: Timothy Gu <timothygu99@gmail.com>

pkgname=fprintd-libfprint2
_pkgname=fprintd
pkgver=1.90.1+81+g6dd010f
pkgrel=1
pkgdesc="D-Bus service to access fingerprint readers"
arch=(x86_64)
url="https://www.freedesktop.org/wiki/Software/fprint/fprintd"
license=(GPL)
depends=(dbus-glib 'libfprint-git>=1.90.0' 'polkit>=0.91')
optdepends=('pam: to use the fprintd pam plugin')
provides=(fprintd)
conflicts=(fprintd)
makedepends=(intltool git gtk-doc meson pam)
checkdepends=(pam_wrapper python-cairo python-dbus python-dbusmock python-gobject)
groups=(fprint)
source=("git+https://gitlab.freedesktop.org/libfprint/$_pkgname.git")
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/^V_//;s/_/./g;s/-/+/g'
}

build() {
  arch-meson $_pkgname build \
    -D pam_modules_dir=/usr/lib/security \
    -D gtk_doc=true
  ninja -C build
}

check() {
  # Unfortunately, the PAM tests often end up cluttering /tmp with pam.*
  # directories, causing random failures the next time tests get run.
  msg2 'Removing stale /tmp/pam.[0-9A-Za-z] directories before testing'
  rm -rf /tmp/pam.[0-9A-Za-z]
  meson test -C build
}

package() {
  DESTDIR="$pkgdir" meson install -C build
}
