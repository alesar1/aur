# Maintainer: Méril Pilon <meril at mailfence dot com>
pkgname=emacs-gcc-wayland-devel-bin
pkgver=28.0.50.146144
pkgrel=1
pkgdesc="GNU Emacs. Development native-comp branch and pgtk branch combined, served as a binary."
arch=('x86_64')
url="http://www.gnu.org/software/emacs/"
license=('GPL3')
depends=('alsa-lib' 'gnutls' 'libxml2' 'jansson' 'libotf' 'harfbuzz' 'gpm' 'libgccjit' 'webkit2gtk')
provides=('emacs' 'emacs-seq')
conflicts=('emacs' 'emacs26-git' 'emacs-27-git' 'emacs-git' 'emacs-seq')
replaces=('emacs26-git' 'emacs27-git' 'emacs-git' 'emacs-seq')

source=("https://github.com/mpsq/emacs-gcc-wayland-devel-builder/releases/download/$pkgver/$pkgver.tar.gz")
sha512sums=("93370c55738d0628c43e08c09b992fc63455e60bd606d8cdda8f776f49802de51e6454368536a71daa5188bd7e8e9642b85b8f5928d2bdc08e7341826033cb72")

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
