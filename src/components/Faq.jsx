import { FAQ_ITEMS } from '../data/faq';

function Faq() {
    return (
        <section className="faq" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">常见问题</span>
                    <h2 id="faq-title" className="section-header__title">
                        你可能想先了解这些
                    </h2>
                    <p className="section-header__desc">
                        以下是导入与使用 SalesPilot 时最常问到的问题；若需要更详细的规格或报价，欢迎预约 Demo。
                    </p>
                </div>

                <div className="faq__list">
                    {FAQ_ITEMS.map((item) => (
                        <details key={item.id} className="faq__item">
                            <summary className="faq__summary">{item.question}</summary>
                            <div className="faq__answer">
                                <p>{item.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
