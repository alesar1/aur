# Maintainer: David Haller <davidhaller@mailbox.org>

pkgname=apache-drill
pkgver=1.20.1
pkgrel=2
pkgdesc="Schema-free SQL Query Engine for Hadoop, NoSQL and Cloud Storage"
arch=(any)
url="https://drill.apache.org"
license=('Apache')
depends=('java-runtime')
source=("https://fossies.org/linux/misc/${pkgname}-${pkgver}.tar.gz"
        "drill-embedded")
sha256sums=('527a196d35a2ae3eadf5a364048c760cb2452cf924edccab5ccafb55815f2632'
            '017be05204b343c7dd3308370fc607f36934ab201a1b525fc51cff75b96b3a16')

package()
{
    cd "${pkgname}-${pkgver}"
    mkdir -p "${pkgdir}/opt/${pkgname}"
    mkdir -p "${pkgdir}/usr/bin"

    cp -r -t "${pkgdir}/opt/${pkgname}/" "bin/" "conf/" "jars/" "sample-data/" "KEYS" "LICENSE" "NOTICE" "README.md" "git.properties"
    rm -f "${pkgdir}/opt/${pkgname}/bin/sqlline.bat"
    chmod o+r "${pkgdir}/opt/${pkgname}/conf"/*

    cp "${srcdir}/drill-embedded" "${pkgdir}/usr/bin/drill-embedded"
    chmod 755 "${pkgdir}/usr/bin/drill-embedded"
}
