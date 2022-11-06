# Maintainer: Martins Mozeiko <martins.mozeiko@gmail.com>

pkgname=glcapsviewer-git
pkgver=r127.26e160c
pkgrel=1
pkgdesc='OpenGL Hardware Capability Viewer'
url='https://opengl.gpuinfo.org/'
arch=('i686' 'x86_64')
license=('GPL3')
source=('git+https://github.com/SaschaWillems/glCapsViewer'
        'https://github.com/SaschaWillems/glCapsViewer/pull/15.patch'
        'glcapsviewer.desktop'
        'glcapsviewer')
sha256sums=('SKIP'
            '1bbc59c259e18a550d788688be7a731e1f379ee08902759cf3e802123b745493'
            '3ff750cda95917ff93388dd373437b12129427bc33e52343247bf69bf1d24c02'
            '139ceb073a34bea5450ca2b6d7f50523f8986d9f5a6b069d36cf05d03609f352')
makedepends=('git' 'cmake')
depends=('glew' 'glfw' 'qt5-base')

pkgver() {
  cd "$srcdir"/glCapsViewer
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir"/glCapsViewer

  patch -p1 -i "$srcdir"/15.patch
}

package() {

  cd "$srcdir"/glCapsViewer
  cmake .
  cmake --build .

  install -dm755 "$pkgdir"/opt/glcapsviewer
  install -m755 "$srcdir"/glCapsViewer/glcapsviewer "$pkgdir"/opt/glcapsviewer/glcapsviewer
  install -m644 "$srcdir"/glCapsViewer/capslist.xml "$pkgdir"/opt/glcapsviewer/capslist.xml
  install -m644 "$srcdir"/glCapsViewer/enumList.xml "$pkgdir"/opt/glcapsviewer/enumList.xml

  install -dm755 "$pkgdir"/usr/bin
  install -m755 "$srcdir"/glcapsviewer "$pkgdir"/usr/bin/glcapsviewer

  install -dm755 "$pkgdir"/usr/share/applications
  install -m644 "$srcdir"/glcapsviewer.desktop "$pkgdir"/usr/share/applications/glcapsviewer.desktop
}
