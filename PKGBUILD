# Maintainer: Raphaël Doursenaud <rdoursenaud@gpcsolutions.fr>

pkgname=openrefine
pkgver=3.0
pkgrel=1
pkgdesc="A free, open source power tool for working with messy data and improving it"
arch=('any')
url=http://openrefine.org
license=('BSD')
depends=('java-environment' 'bash')
options=('!strip')
source=("https://github.com/OpenRefine/OpenRefine/releases/download/${pkgver}/${pkgname}-linux-${pkgver}.tar.gz" 'openrefine.sh')
sha512sums=('73e9879b5770c840b3edd6a07433588edfdafa5409bef53598a9f6d3d0eceb6716bb4b4ad710fb41bf2a46edd440c263af546c148af42e7e2f3dac7b0a34a930'
            '2e3a551c15d99698a3a81051d44514b4e7f1b7c362076d1a9e8b8b3f5902c73f29a2eab367995b078336451037b021a6849219889f97c16524e261cbac180ec1')

package()
{
    install -d ${pkgdir}/opt/${pkgname}
    cp -a ${srcdir}/${pkgname}-${pkgver}/* ${pkgdir}/opt/${pkgname}
    # License
    install -d ${pkgdir}/usr/share/licenses/${pkgname}/
    install ${srcdir}/${pkgname}-${pkgver}/LICENSE.txt ${pkgdir}/usr/share/licenses/${pkgname}/
    # refine is already used by argyllcms
    install -d ${pkgdir}/usr/bin
    install openrefine.sh ${pkgdir}/usr/bin/openrefine
}
