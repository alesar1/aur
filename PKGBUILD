#Maintainer wicast <wicastchen at hotmail>

pkgname=glide-bin
_pkgname=glide
pkgver=0.6.1
pkgrel=1
pkgdesc="Simplified Go project management, dependency management, and vendoring."
arch=('x86_64' 'i686')
url=('https://github.com/Masterminds/glide')
licence=('MIT')
provides=('glide=0.6.1')
conflicts=('glide')
source_x86_64=("https://github.com/Masterminds/glide/releases/download/${pkgver}/${_pkgname}-linux-amd64.zip")
source_i686=("https://github.com/Masterminds/glide/releases/download/${pkgver}/${_pkgname}-linux-386.zip")
md5sums_x86_64=('b7e49dd152a8f61bcebc88905c16f19b')
md5sums_i686=('a2feac1b0f5178d63880bc16c945b6f8')

if [ "$CARCH" = "i686"  ]; then
    _PKGARCH=386
else
    _PKGARCH=amd64
fi

package() {
    cd $srcdir/linux-$_PKGARCH
    install -Dm755 "$_pkgname" "${pkgdir}/usr/bin/${_pkgname}"
    install -Dm644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
