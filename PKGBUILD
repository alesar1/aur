# Contributor: Baptiste Grenier <baptiste@bapt.name>
# Contributor: Pablo Olmos de Aguilera Corradini <pablo <at] glatelier (dot} org>
# Maintainer: Olivier Mehani <shtrom-aur@ssji.net>
pkgname=gtg-git
pkgver=r5112.1328f1d
pkgrel=1
pkgdesc="Personal GTD like organizer for the GNOME desktop environment. Git version."
url="http://gtgnome.net/"
arch=('i686' 'x86_64')
license=('GPL')
depends=('pygtk' 'pygobject' 'python2-configobj' 'pyxdg' 'dbus-python'
'hicolor-icon-theme' 'desktop-file-utils' 'python2-gnomekeyring'
'python-liblarch-git')
makedepends=('bzr' 'python2-gconf')
optdepends=(
"python-bugz: for Bugzilla plugin"
"python-cheetah: for Export and print plugin"
"pdflatex: for Export and print plugin"
"pdftk: for Export and print plugin"
"pdfjam: for Export and print plugin"
"python-geoclue: for Geolocalized tasks plugin"
"python-clutter: for Geolocalized tasks plugin"
"python-clutter-gtk: for Geolocalized tasks plugin"
"python-champlain: for Geolocalized tasks plugin"
"python-champlain-gtk: for Geolocalized tasks plugin"
"hamster-time-tracker: for Hamster Time Tracker Integration to integrate with"
"python-appindicator: for Notification area plugin"
"python-dbus: for Tomboy/Gnote plugin"
"python-evolution: for Evolution synchronization service"
"python-dateutil: for Evolution and RememberTheMilk synchronization services"
"python-suds: for MantisBT synchronization service"
"python-launchpadlib: for Launchpad synchronization service"
)
conflicts=('gtg')
install="${pkgname}.install"
source=("${pkgname}::git+https://github.com/getting-things-gnome/gtg"
        "0001-Remove-has_separator-property.patch")

pkgver() {
  cd "$srcdir/${pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/${pkgname}"
  patch -p1 < ${srcdir}/0001-Remove-has_separator-property.patch
  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}"
  python setup.py install --root=${pkgdir}
}

# vim:set ts=2 sw=2 et:
md5sums=('SKIP'
         'a79aab175a0434928e5da2c12f94abb8')
