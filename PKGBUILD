# Maintainer: bauh developers <bauh4linux@gmail.com>

pkgname=bauh
pkgver=0.9.11
pkgrel=1
pkgdesc="Graphical interface for managing your applications (AppImage, Flatpak, Snap, Arch/AUR, Web)"
arch=('any')
url="https://github.com/vinifmor/bauh"
license=('zlib/libpng')
depends=('python' 'python-pyqt5' 'python-pyqt5-sip' 'python-requests' 'python-colorama' 'python-pyaml' 'qt5-svg' 'python-dateutil')
optdepends=('flatpak: required for Flatpak support' 
            'snapd: required for Snap support'
            'python-beautifulsoup4: for Native Web applications support'
            'python-lxml: for Native Web applications support'
            'sqlite3: required for AppImage support'
            'wget: required for AppImage and AUR support'
            'fuse2: may be required for AppImage support'
            'fuse3: may be required for AppImage support'
            'pacman: required for AUR support'             
            'binutils: required for AUR support'
            'git: required for AUR support'            
            'autoconf: may be required to compile some AUR packages'
            'automake: may be required to compile some AUR packages'
            'bison: may be required to compile some AUR packages'
            'fakeroot: may be required to compile some AUR packages'
            'flex: may be required to compile some AUR packages'
            'gcc: may be required to compile some AUR packages'
            'm4: may be required to compile some AUR packages'
            'lib32-fakeroot: may be required to compile some AUR packages'
            'make: may be required to compile some AUR packages'
            'patch: may be required to compile some AUR packages'
            'pkgconf: may be required to compile some AUR packages'            
            'ccache: can improve AUR packages compilation speed' 
            'aria2: multi-threaded downloading support'
            'breeze: KDE Plasma main theme'
            'axel: multi-threaded downloading support')
makedepends=('git' 'python' 'python-pip' 'python-setuptools')
source=("${url}/archive/${pkgver}.tar.gz")
sha512sums=('318bef84a78382f3f54c345d59725bd178711108c6709b0d469564a6ccb9238eb7c85fcd7ec61716c8d816f16472b6080ad66ad61a9de8aa3d5811aa45539c8a')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python3 setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"  
  python3 setup.py install --root="$pkgdir" --optimize=1 || return 1
  
  mkdir -p $pkgdir/usr/share/icons/hicolor/scalable/apps

  cp bauh/view/resources/img/logo.svg $pkgdir/usr/share/icons/hicolor/scalable/apps/bauh.svg
 
  mkdir -p $pkgdir/usr/share/applications
  mv bauh/desktop/bauh.desktop $pkgdir/usr/share/applications/
  mv bauh/desktop/bauh_tray.desktop $pkgdir/usr/share/applications/
}
