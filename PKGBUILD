# Maintainer: Ivan Semkin (ivan at semkin dot ru)

_extension_name='user-agent-switcher'
_extension_id='djflhoibgkdhkhhcedjiklpkjnoahfmg'
pkgname="chromium-extension-${_extension_name}"
pkgver=latest
pkgrel=1
pkgdesc='Spoofs & Mimics User-Agent strings'
license=('CUSTOM')
arch=('any')
url='https://www.google.com'
depends=('chromium')
source=("${_extension_id}.json")
sha256sums=('5bcd92f712b450ecb20eb390f957216d488e5dc0c4abbb2cbf4dd6b570b11edc')

package() {
    cd "${srcdir}"
    install -Dm 644 "${_extension_id}.json"     \
            "${pkgdir}/usr/share/chromium/extensions/${_extension_id}.json"
}

