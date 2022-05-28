# Maintainer: Donald Webster <fryfrog@gmail.com>
# Contributor: Martins Mozeiko <martins.mozeiko@gmail.com>

pkgname=jellyseerr
pkgver=1.1.0
pkgrel=1
pkgdesc='Request management and media discovery tool for the Plex ecosystem'
arch=('x86_64')
url='https://github.com/Fallenbagel/jellyseerr'
license=('MIT')
depends=('nodejs')
makedepends=('yarn')
options=('!strip')
backup=('etc/conf.d/jellyseerr')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/Fallenbagel/jellyseerr/archive/v${pkgver}.tar.gz"
        'jellyseerr.sysusers'
        'jellyseerr.tmpfiles'
        'jellyseerr.service'
        'jellyseerr.conf.d')
sha256sums=('e0b09f2ce82f05ab5cc1070b28856c2c1569e584b129c6ab2bb2a3a2e939567f'
            '372ee94f76040ea76af49fd2f9db851375559458ba1b55ea41f1b2768fe10cb8'
            'cb0b856fc93969c901e69eb31dc201f4e37c8a2d30041beabf1a82077cca4c24'
            '84159db69b33ef3c4e6a424b32331f78e92efe316355c05e3f86920e1ad24c05'
            '1648f0aef4b0da6daf257718eef8814b91f729b289ed63617bfadbb160e3cfc1')

build()
{
    cd "${srcdir}/${pkgname}-${pkgver}"

    export COMMIT_TAG=${pkgver}
    echo "{\"commitTag\": \"${COMMIT_TAG}\"}" > committag.json

    mkdir -p .next "${srcdir}/.jellyseer_cache"
    rm -rf .next/cache # in case previous builds have it as real folder
    ln -s "${srcdir}/.jellyseer_cache" .next/cache

    patch -p0 < "../../no-prepare-husky.patch"

    yarn --frozen-lockfile
    yarn build
    yarn install --production --ignore-scripts --prefer-offline
    yarn cache clean
}

package()
{
    install -m0755 -d "${pkgdir}/usr/lib/jellyseerr"
    cp -dr --no-preserve='ownership' "${srcdir}/${pkgname}-${pkgver}/." "${pkgdir}/usr/lib/jellyseerr"

    find "${pkgdir}/usr/lib/jellyseerr/.next" -type f -print0 | xargs -0 sed -i "s^${srcdir}/${pkgname}-${pkgver}^/usr/lib/jellyseerr^g"

    rm -rf "${pkgdir}/usr/lib/jellyseerr/config"
    rm -rf "${pkgdir}/usr/lib/jellyseerr/.next/cache"
    ln -s "/var/lib/jellyseerr" "${pkgdir}/usr/lib/jellyseerr/config"

    install -Dm0644 "${srcdir}/jellyseerr.conf.d"   "${pkgdir}/etc/conf.d/jellyseerr"
    install -Dm0644 "${srcdir}/jellyseerr.sysusers" "${pkgdir}/usr/lib/sysusers.d/jellyseerr.conf"
    install -Dm0644 "${srcdir}/jellyseerr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/jellyseerr.conf"
    install -Dm0644 "${srcdir}/jellyseerr.service"  "${pkgdir}/usr/lib/systemd/system/jellyseerr.service"
}
