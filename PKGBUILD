# Maintainer: Méril Pilon <meril at mailfence dot com>
# Maintainer of emacs-git: Pedro A. López-Valencia <https://aur.archlinux.org/users/vorbote>
# Maintainer of emacs-pgtk-native-comp: Andrew Whatson <https://aur.archlinux.org/account/flatwhatson>

pkgname=emacs-gcc-wayland-devel-bin
pkgver=28.0.50.146530
pkgrel=1
pkgdesc="GNU Emacs. Development native-comp branch and pgtk branch combined, served as a binary."
arch=('x86_64')
url="http://www.gnu.org/software/emacs/"
license=('GPL3')
depends=('alsa-lib' 'cairo' 'gnutls' 'gtk3' 'libxml2' 'jansson' 'libotf' 'harfbuzz' 'gpm' 'libgccjit' 'webkit2gtk')
provides=('emacs' 'emacs-seq')
conflicts=('emacs' 'emacs26-git' 'emacs-27-git' 'emacs-git' 'emacs-seq')
replaces=('emacs26-git' 'emacs27-git' 'emacs-git' 'emacs-seq')

source=("https://github.com/mpsq/emacs-gcc-wayland-devel-builder/releases/download/$pkgver/$pkgver.tar.gz")
sha512sums=("5113397b82f0054eb53a17ed9c8c5465c2ceee092de12c7d9d79c7b5c7be30081e4307ecdaf4a6c32e5bbba2005b3890479b240c9376a3a688ed271db132775a")

package() {
  cp -r usr/ $pkgdir/
  cp -r var/ $pkgdir/

  # fix user/root permissions on usr/share files
  find "$pkgdir"/usr/share/emacs/ | xargs chown root:root

  # fix permssions on /var/games
  chmod 775 -R "$pkgdir"/var/games
  chmod 775 -R "$pkgdir"/var/games/emacs
  chown -R root:games "$pkgdir"/var/games
}
