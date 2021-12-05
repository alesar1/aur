#Maintainer Guoyi Zhang <GuoyiZhang at malacology dot net>
#Contributor Matthijs Tadema <M dot J dot Tadema at pm dot me>
#Contributor Jens Staal <staal1978@gmail.com>

pkgname=ugene-bin
pkgver=41.0
pkgrel=1
pkgdesc="A free cross-platform genome analysis suite (binary release)"
arch=('x86_64')
url="http://ugene.net"
license=('GPL')
depends=('libxtst' 'glu' 'qt5-webkit' 'qt5-websockets' 'qt5-svg' 'qt5-script' 'desktop-file-utils')
optdepends=('cufflinks' 'bowtie' 'clustalw' 'phyml' 'blast+' 'clustal-omega' 'vcftools' 'mrbayes' 'bwa' 'bedtools'
	'tcoffee' 'hmmer' 'snpeff' 'samtools' 'mafft' 'trimmomatic' 'stringtie' 'kraken' 'diamond-aligner'
	'python2-cutadapt' 'python' 'java-runtime' 'bowtie2' 'tophat' 'fastqc')
provides=('ugene')
conflicts=('ugene-git')
source=("https://github.com/ugeneunipro/ugene/releases/download/${pkgver}/ugene-${pkgver}-linux-x86-64.tar.gz" "ugene.desktop" "ugene.svg")
sha256sums=('bcd2713842d41d2a02a5b400031e7b5e136ae30fd1a3a00be777d3af1d5d27eb'
            '58aeee982faa07913c016323cdded0a4022695c4e313954fdc09c36742013896'
            '5a159437635965cae796c968c7297fd098e7f86dcecbe6a97e62950e782641fc')

package() {
    mkdir -p "${pkgdir}/usr/"{bin,share/{applications,icons,ugene}}
    install -D -m 755 ugene.svg "${pkgdir}/usr/share/icons/ugene.svg"
    cd "$srcdir/ugene-$pkgver"
    chmod +x *
    mv * $pkgdir/usr/share/ugene
    ln -s /usr/share/ugene/ugene "$pkgdir"/usr/bin/ugene
    install -D -m 755 ${srcdir}/*.desktop "${pkgdir}/usr/share/applications"
}
