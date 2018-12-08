# Maintainer: mark.blakeney at bullet-systems dot net
# Original Maintainer: Jameson Pugh <imntreal@gmail.com>

_pkgname=skypeforlinux
pkgname=$_pkgname-preview-bin
pkgver=8.36.76.38
pkgrel=1
pkgdesc="Skype for Linux - Preview/Insider Version"
arch=("x86_64")
url="http://www.skype.com"
license=("custom")
depends=("gtk3" "libxss" "gconf" "alsa-lib" "libxtst" "libsecret" "nss" "glibc>=2.28-4")
optdepends=("gnome-keyring")
makedepends=("asar")
conflicts=("$_pkgname" "$_pkgname-bin" "$_pkgname-stable-bin" "$_pkgname-beta-bin" "skype")
provides=("$_pkgname" "skype")
replaces=("$_pkgname-bin")
source=(
"https://repo.skype.com/deb/pool/main/s/$_pkgname/${_pkgname}_${pkgver}_amd64.deb"
)
sha256sums=('5b51d587160cc1d7ae9b6b1f46f6b0a450eda1cef3bdcbf11f38b62954e2de97')

package() {
  tar -xJC "$pkgdir" -f data.tar.xz
  install -d "$pkgdir/usr/share/licenses/$pkgname"
  mv "$pkgdir/usr/share/$_pkgname/LICENSES.chromium.html" \
    "$pkgdir/usr/share/licenses/$pkgname/"
  rm -rf "$pkgdir/opt"

  # Replace all 16px tray icons with 32px.
  _p="/usr/share/skypeforlinux/resources"
  cd "$pkgdir/$_p"
  asar extract app.asar _tmp
  cd _tmp/images/tray
  find . -iname '*@2x.png' | while read f; do
    cp $f ${f//@2x/}
  done
  cd "$pkgdir/$_p"
  asar pack _tmp app.asar
  rm -rf _tmp
}

# vim:set ts=2 sw=2 et:
