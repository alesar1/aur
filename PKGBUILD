# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Nikolay Rysev <mad.f3ka@gmail.com>
# Modified for vfs_proprietary by Daniel Kamil Kozar <dkk089@gmail.com>
# Modified for libfprint2 by Stephen Bird <sebirdman@gmail.com>

pkgname=fprintd-libfprint2
_pkgname=fprintd
pkgver=1.90.1+12+g750a815
pkgrel=2
pkgdesc="D-Bus service to access fingerprint readers"
arch=(x86_64)
url="https://www.freedesktop.org/wiki/Software/fprint/fprintd"
license=(GPL)
depends=(dbus-glib 'libfprint-git>=1.90.0' 'polkit>=0.91')
optdepends=('pam: to use the fprintd pam plugin')
provides=(fprintd)
conflicts=(fprintd)
makedepends=(intltool git gtk-doc meson pam)
checkdepends=(python-cairo python-dbus python-dbusmock python-gobject python-pypamtest)
groups=(fprint)
source=(
  "git+https://gitlab.freedesktop.org/libfprint/fprintd.git"
  'disable-systemd-protection.patch'
)
sha256sums=(
  'SKIP'
  '4854d32d6579de31fd59b4df02f6a29db2e266dedfe9edda13bedcda1b083be1'
)

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/^V_//;s/_/./g;s/-/+/g'
}

prepare() {
  cd $_pkgname
  patch -p1 -i "${srcdir}/disable-systemd-protection.patch"
}

build() {
  arch-meson $_pkgname build -D pam_modules_dir=/usr/lib/security -D gtk_doc=true
  ninja -C build
}

check() {
  meson test -C build
}

package() {
  DESTDIR="$pkgdir" meson install -C build
}
