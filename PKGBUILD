# Programmer: varmd
# Maintainer: abelian424

pkgname=wine-wayland
pkgver=6.0.0.rc3
pkgrel=2
_pkgver=6.0rc3-1
pkgdesc='Wine-wayland allows running DX9/DX11 and Vulkan games using pure wayland and Wine/DXVK'
arch=('x86_64')
url='https://github.com/varmd/wine-wayland'
license=('LGPL')
depends=( )
makedepends=( )
optdepends=( )
#depends=(desktop-file-utils faudio fontconfig freetype2 glu lcms2
#  libpcap libsm libxcursor libxdamage libxi libxml2 libxrandr
#  lib32-faudio lib32-fontconfig lib32-freetype2 lib32-gcc-libs
#  lib32-gettext lib32-glu lib32-lcms2 lib32-libpcap lib32-libsm
#  lib32-libxcursor lib32-libxdamage lib32-libxi lib32-libxml2
#  lib32-libxrandr)
#makedepends=(alsa-lib fontforge giflib gnutls gsm
#  gst-plugins-base-libs libcups libgl libgphoto2 libldap libpng
#  libpulse libxcomposite libxinerama libxmu libxslt libxxf86vm mesa
#  mingw-w64-gcc mpg123 ncurses ocl-icd openal opencl-headers perl
#  samba sane sdl2 v4l-utils vkd3d vulkan-headers vulkan-icd-loader
#  lib32-alsa-lib lib32-giflib lib32-gnutls lib32-gst-plugins-base-libs
#  lib32-libcups lib32-libgl lib32-libldap lib32-libpng lib32-libpulse
#  lib32-libxcomposite lib32-libxinerama lib32-libxmu lib32-libxslt
#  lib32-libxxf86vm lib32-mesa lib32-mpg123 lib32-ncurses lib32-ocl-icd
#  lib32-openal lib32-sdl2 lib32-v4l-utils lib32-vkd3d
#  lib32-vulkan-icd-loader)
#optdepends=(alsa-lib alsa-plugins dosbox giflib gnutls gsm
#  gst-plugins-base-libs libcups libgphoto2 libjpeg-turbo libldap
#  libpng libpulse libxcomposite libxinerama libxslt mpg123 ncurses
#  ocl-icd openal samba sane sdl2 v4l-utils vkd3d vulkan-icd-loader
#  lib32-alsa-lib lib32-alsa-plugins lib32-giflib lib32-gnutls
#  lib32-gst-plugins-base-libs lib32-libcups lib32-libjpeg-turbo
#  lib32-libldap lib32-libpng lib32-libpulse lib32-libxcomposite
#  lib32-libxinerama lib32-libxslt lib32-mpg123 lib32-ncurses
#  lib32-ocl-icd lib32-openal lib32-sdl2 lib32-v4l-utils lib32-vkd3d
#  lib32-vulkan-icd-loader)
provides=('wine-wayland')
conflicts=('wine')
source=("https://github.com/varmd/wine-wayland/releases/download/v$pkgver.$pkgrel/$pkgname-$_pkgver-x86_64.pkg.tar.zst"
"https://github.com/varmd/wine-wayland/releases/download/v$pkgver.$pkgrel/lib32-$pkgname-$_pkgver-x86_64.pkg.tar.zst")
md5sums=('8f79f98f8d4390bc5e93664cc38e57e1'
         '37c3b2b5010ce6e856d262857ebdb4d4')

package() {
     pacman -U wine-wayland*pkg*
     pacman -U lib32-wine-wayland*pkg*
}
