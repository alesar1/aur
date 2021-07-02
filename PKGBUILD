# Maintainer: Leonard Janis König <ljrk@ljrk.org>

pkgname='otf-apple-ny'
pkgver=16.0d2e2
pkgrel=2
pkgdesc='Apples New York typeface family. For usage alongside SF.'
arch=('any')
url='https://developer.apple.com/fonts/'
license=('custom:apple-restricted-font')
_file='NY.dmg'
source=("https://devimages-cdn.apple.com/design/resources/download/$_file"
        'license.awk'
        'version.awk')
sha256sums=('e44afa02ec75ac6800a50e916446f8c5a3ed042fa3cd846ae5860c99b537f3b2'
            'cd45a6edaa3829837b090a5a18d3c906816931e7a779b33b6ada23b49b5a5889'
            '55a4e9e108e50b07481044fad445636e502f2d95d7e8964e1d4cda3e9618b198')
makedepends=('texlive-bin' 'p7zip')

prepare() {
    cd ${srcdir}
    # These are dmg images, xar and cpio archives.  Just use 7z.
    7z x -y "$_file"
    7z x -y 'NYFonts/NY Fonts.pkg'
    7z x -y 'Payload~'

    otfinfo -i Library/Fonts/NewYorkMedium-Regular.otf | \
        awk -f license.awk > LICENSE
}

pkgver() {
    cd ${srcdir}
    otfinfo -i Library/Fonts/NewYorkMedium-Regular.otf | \
        awk -f version.awk
}

package() {
    install -Dm655 "${srcdir}"/Library/Fonts/*.otf \
        -t "${pkgdir}/usr/share/fonts/OTF/"
    install -Dm655 "${srcdir}"/Library/Fonts/*.ttf \
        -t "${pkgdir}/usr/share/fonts/TTF/"
    install -Dm644 LICENSE \
        "${pkgdir}"/usr/share/licenses/${pkgname}/AppleFontLicense
}
