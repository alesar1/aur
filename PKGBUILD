# Maintainer: Carlos Silva <r3pek@r3pek.org>

pkgname=ecce-gov-pt-certificates
pkgver=20200408
pkgrel=1
pkgdesc="CA Certificates from ECCE.gov.pt"
arch=('any')
license=('custom')
url="http://www.ecce.gov.pt/certificados/"
source=("http://www.ecce.gov.pt/media/3793/ecraizestado.crt"
        "http://www.ecce.gov.pt/media/3643/ca_ecce_001.crt")
sha512sums=('6e79599426ca40bb9ce9c199afad46c5ec5d7d612f0df1af6aa1f82876546926c4e502c6285d85f0124e58104c1f051f2f7dfa84a4b21f94c28073ae276e06de'
            'fbbec2138137c4066917f7abf20dfd38c5d824bc8fed714d2deb0249d051d68882b2b36c1f57c057bccd1f927248a733755f533178a5669f86483cb2e2ec46f3')

package() {
	mkdir -p ${pkgdir}/etc/ca-certificates/trust-source/anchors
	install ${srcdir}/*.crt ${pkgdir}/etc/ca-certificates/trust-source/anchors/
}
