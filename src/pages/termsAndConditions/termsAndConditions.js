import './termsAndConditions.css';
import TextBlock from './../../Components/block-for-text/block-for-text';

const TermsAndConditions = () => {
    return (
        <div className='content'>

            <div className='page-content'>
                <TextBlock title="Terms & conditions">

                    <TextBlock subtitle="Website Terms & Conditions of Use Relating to MovieHouse">
                        <p className='text'>
                            These Terms and Conditions ("the Terms and Conditions") govern your ("the User") use
                            of the MovieHouse ("Provider") website located at the domain name MovieHouse ("the Website").
                            By accessing and using the Website, the User agrees to be bound by the Terms and Conditions 
                            set out in this legal notice. The User may not access, display, use, download, and/or otherwise
                            copy or distribute Content obtained on the website for marketing and other purposes without the
                            consent Provider.
                        </p>
                    </TextBlock>

                    <TextBlock subtitle="Electronic Communications">
                        <p className='text'>
                                By using this Website or communicating with the Provider by electronic means, the user 
                                consents and acknowledges that any and all agreements, notices, disclosures, or any 
                                other communication satisfies any legal requirement, including but not limited to the 
                                requirement that such communications should be in writing.
                        </p>
                    </TextBlock>

                    <TextBlock subtitle="E-Commerce & Privacy">
                        <p className='text'>
                            The Website MovieHouse gives to watch films, series, cartoons etc. online.
                            The use of any product or service bought from this Website is at the purchaser's
                            risk. The purchaser/user indemnifies and holds the Provider harmless against any loss,
                            injury or damages which may sustained as a result of using the product sold on the Website.
                        </p>

                        <p className='text'>
                            The private information required for executing the orders placed through the e-commerce 
                            facility, namely the User's personal information and telephone numbers will be kept in the strictes 
                            confidence by the Provider and not sold or made known to third parties. 
                        </p>

                        <p className='text'>
                            The Provider cannot be held responsible for security breaches occuming on the User's electronic 
                            device (Personal Computer or other electronic device used to browse the Website), which may result 
                            due to the lack of adequate virus protection software or spyware that the User may inadvertenly have 
                            installed on his/her device.
                        </p>
                    </TextBlock>

                </TextBlock>
            </div>

        </div>
    )
}

export {TermsAndConditions};