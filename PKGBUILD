# Maintainer: Méril Pilon <meril at mailfence dot com>
# Maintainer of emacs-git: Pedro A. López-Valencia <https://aur.archlinux.org/users/vorbote>
# Maintainer of emacs-pgtk-native-comp: Andrew Whatson <https://aur.archlinux.org/account/flatwhatson>

pkgname=emacs-gcc-wayland-devel-bin
pkgver=28.0.50.147181
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
sha512sums=("a8b48a879fb87db46bf17ab01a6da0a1bec57f365eca4c399a52ff7eac727ed75851e7ef3880e887c9fd1733f63b4a8b9405baefd5a988f1537ea1f0f3e9908a")

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
