# Maintainer: Phil Ruffwind <rf@rufflewind.com>
pkgname=ttf-oxygen-gf
pkgver=r841.71c9d4f2
pkgrel=1
pkgdesc='Oxygen and Oxygen Mono fonts from the Google Fonts catalog'
arch=(any)
url=https://github.com/google/fonts
license=(custom:OFL)
depends=(fontconfig xorg-font-utils)
provides=(ttf-font ttf-oxygen ttf-oxygen-git)
conflicts=(ttf-google-fonts-git ttf-oxygen ttf-oxygen-git)
source=(google-fonts-49fbebd3dc75d42fe72c4a3eef6524f8fcc335fd-ofl-oxygen-OFL.txt::https://raw.githubusercontent.com/google/fonts/49fbebd3dc75d42fe72c4a3eef6524f8fcc335fd/ofl/oxygen/OFL.txt google-fonts-71c9d4f236262c3a7410f3d939c12ac1b8da3f62-ofl-oxygen-Oxygen-Bold.ttf::https://raw.githubusercontent.com/google/fonts/71c9d4f236262c3a7410f3d939c12ac1b8da3f62/ofl/oxygen/Oxygen-Bold.ttf google-fonts-71c9d4f236262c3a7410f3d939c12ac1b8da3f62-ofl-oxygen-Oxygen-Light.ttf::https://raw.githubusercontent.com/google/fonts/71c9d4f236262c3a7410f3d939c12ac1b8da3f62/ofl/oxygen/Oxygen-Light.ttf google-fonts-71c9d4f236262c3a7410f3d939c12ac1b8da3f62-ofl-oxygen-Oxygen-Regular.ttf::https://raw.githubusercontent.com/google/fonts/71c9d4f236262c3a7410f3d939c12ac1b8da3f62/ofl/oxygen/Oxygen-Regular.ttf google-fonts-883939708704a19a295e0652036369d22469e8dc-ofl-oxygenmono-OxygenMono-Regular.ttf::https://raw.githubusercontent.com/google/fonts/883939708704a19a295e0652036369d22469e8dc/ofl/oxygenmono/OxygenMono-Regular.ttf)
sha512sums=('ea77302599c998d8e84ff47481482d6939ec7c6d15c2ff99422361a870f7faf56f111b3ff0ce2ab9baea4b1bd010f76b76d87408ee92170204fdc31bb0cb5e46'
            '6dfe6c8179ebee756a6fa6f9e5266ea541472c160851ab67f568f70740c3df8e0b349102e2a599c626a240c3d188717a42dc66ff0fa7a944974001a8d3c8aa38'
            'ce87c1183757daa3879177a3b384acee01625d37c06d23019ccf23571e8bc61c7f30e3d3d2b4f1dfb1d7077678d8265199c16ea4b3be795c110bf3b7f7e11067'
            '24c71b620c48e4061d0cb0530c12644861ebcdd1b91df085735c5e0aabd5ec359e0c8d75d7075bb46854ad50f8dee76b048f9678a58c8d18060bf88ed20836ab'
            '5e0a7efb11da9e64b3a1709b090335ff324b1a4b1313a33bede6c0048da99b7e18398f8841cc2d4db00c2ba1ff0028d589dc245421d1ef0045beb1a4f0778f7d')

package() {
    cd "${srcdir}"
    install -Dm644 google-fonts-49fbebd3dc75d42fe72c4a3eef6524f8fcc335fd-ofl-oxygen-OFL.txt "${pkgdir}/usr/share/licenses/${pkgname}/"OFL.txt
    install -Dm644 google-fonts-71c9d4f236262c3a7410f3d939c12ac1b8da3f62-ofl-oxygen-Oxygen-Bold.ttf "${pkgdir}/usr/share/fonts/TTF/${pkgname}/"Oxygen-Bold.ttf
    install -Dm644 google-fonts-71c9d4f236262c3a7410f3d939c12ac1b8da3f62-ofl-oxygen-Oxygen-Light.ttf "${pkgdir}/usr/share/fonts/TTF/${pkgname}/"Oxygen-Light.ttf
    install -Dm644 google-fonts-71c9d4f236262c3a7410f3d939c12ac1b8da3f62-ofl-oxygen-Oxygen-Regular.ttf "${pkgdir}/usr/share/fonts/TTF/${pkgname}/"Oxygen-Regular.ttf
    install -Dm644 google-fonts-883939708704a19a295e0652036369d22469e8dc-ofl-oxygenmono-OxygenMono-Regular.ttf "${pkgdir}/usr/share/fonts/TTF/${pkgname}/"OxygenMono-Regular.ttf
}
