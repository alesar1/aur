# Maintainer: Tyler Swagar <buttpickle69@shaw.ca>

pkgname=ttf-merriweather-sans
pkgver=1.006
pkgrel=1
pkgdesc='A sans-serif typeface that is pleasant to read on screens by Sorkin Type Co'
arch=('any')
url='https://fonts.google.com/specimen/Merriweather+Sans'
license=('custom:SIL Open Font License v1.1')
depends=('fontconfig' 'xorg-fonts-encodings' 'xorg-font-utils')
conflicts=('ttf-google-fonts-git' 'ttf-google-fonts-opinionated-git')
install="${pkgname}.install"
source=('https://github.com/google/fonts/raw/master/ofl/merriweathersans/MerriweatherSans-Bold.ttf'
        'https://github.com/google/fonts/raw/master/ofl/merriweathersans/MerriweatherSans-BoldItalic.ttf'
        'https://github.com/google/fonts/raw/master/ofl/merriweathersans/MerriweatherSans-ExtraBold.ttf'
        'https://github.com/google/fonts/raw/master/ofl/merriweathersans/MerriweatherSans-ExtraBoldItalic.ttf'
        'https://github.com/google/fonts/raw/master/ofl/merriweathersans/MerriweatherSans-Italic.ttf'
        'https://github.com/google/fonts/raw/master/ofl/merriweathersans/MerriweatherSans-Light.ttf'
        'https://github.com/google/fonts/raw/master/ofl/merriweathersans/MerriweatherSans-LightItalic.ttf'
        'https://github.com/google/fonts/raw/master/ofl/merriweathersans/MerriweatherSans-Regular.ttf'
        'https://github.com/google/fonts/raw/master/ofl/merriweathersans/OFL.txt')
sha256sums=('9b17d0769b7f16eae06168007dfe129ca1be4e582d972949103daf9be393ba87'
            'dc40cb2fb6d2e7d775cf63af674f137c74160d1de8af55d942192381a8eb7d2e'
            'b3c4697d84a65397d98657ce2e934aa1dd0f9187776525b61ebf05e2779d4fef'
            'f60fcb67bc5d4c5c087523c91c90303f1463790b34924942f8af02d2238be21b'
            '9ff9310de27fbcfeabd976f6925f75f4e67ba8afb31c9d76ccad4070ed383e98'
            '296f4c55d4df693b2ee8240184b2d8ff655c5f32944597f7733965dc76840d40'
            'ff3b59fa8aca71e75e9aa329bf1e67bcf2fb4f5fa23edefba010c024941229f7'
            'd8ca7e8e39b7e486d7545a0bbefdfe08dfd9b2ddaa672be07f48b16c46dbc24b'
            '22c4588bdc14621220ba14515d52041d1312541e034a15d1f5c2a88fc6075276')

package() {
  install -dm 755 "${pkgdir}/usr/share/fonts/TTF"
  install -m 644 *.ttf "${pkgdir}/usr/share/fonts/TTF/"
  install -Dm644 *.txt "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
}
