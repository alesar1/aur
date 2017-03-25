# Maintainer: Wellington <wellingtonwallace@gmail.com>
pkgname=pulseeffects
pkgver=1.0.2
pkgrel=1
pkgdesc="Audio effects for Pulseaudio applications"
arch=(any)
url="https://github.com/wwmm/pulseeffects"
license=('GPL3')
depends=(python python-gobject gtk3 gst-plugins-good gst-plugins-bad gst-python
         swh-plugins)
makedepends=('python-setuptools')
options=(!emptydirs)
source=("https://github.com/wwmm/pulseeffects/archive/v$pkgver.tar.gz")
md5sums=('04ab9e39fce85595daa551b8a5b76881')

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
  mkdir -p "$pkgdir/usr/share/glib-2.0/schemas"
  mkdir -p "$pkgdir/usr/share/applications"
  mkdir -p "$pkgdir/usr/share/icons/hicolor/scalable/apps"
  cp "share/glib-2.0/schemas/com.github.wwmm.pulseeffects.gschema.xml" \
     "$pkgdir/usr/share/glib-2.0/schemas"
  cp "share/applications/pulseeffects.desktop" "$pkgdir/usr/share/applications"
  cp "share/icons/hicolor/scalable/apps/pulseeffects.svg" \
     "$pkgdir/usr/share/icons/hicolor/scalable/apps"
}

# vim:set ts=2 sw=2 et:
